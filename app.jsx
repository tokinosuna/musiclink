const { useState, useEffect, useRef } = React;

// --- UTILITY FUNCTIONS ---
const loadState = (key, defaultValue) => {
    try {
        const saved = localStorage.getItem(key);
        if (saved === null) return defaultValue;
        return JSON.parse(saved);
    } catch (e) {
        console.error("Failed to load state for", key, e);
        return defaultValue;
    }
};

// --- DATA RE-HYDRATION LOGIC (Fix for old localStorage data) ---
const rehydrateItems = (savedItems) => {
    if (!savedItems || savedItems.length === 0 || typeof savedItems[0].name !== 'string') {
        return savedItems; // Data is new, empty, or invalid - return as is.
    }
    console.log("Old character data detected in localStorage. Re-hydrating state...");
    const itemIds = savedItems.map(c => c.id);
    const fullItems = charactersDataWithTranslations.filter(c => itemIds.includes(c.id));
    return itemIds.map(id => fullItems.find(c => c.id === id)).filter(Boolean);
};

const rehydrateJournal = (savedJournal) => {
    if (!savedJournal || savedJournal.length === 0 || !savedJournal[0].character || typeof savedJournal[0].character.name !== 'string') {
        return savedJournal;
    }
    console.log("Old journal data detected in localStorage. Re-hydrating state...");
    return savedJournal.map(entry => {
        if (entry.type === 'sync' && entry.character) {
            const fullCharacter = charactersDataWithTranslations.find(c => c.id === entry.character.id);
            return { ...entry, character: fullCharacter || entry.character };
        }
        return entry;
    });
};


// --- CENTRALIZED UI TRANSLATIONS ---
const uiText = {
    en: {
        player: "Player", // ADD THIS LINE
        menu: "Menu", discover: "Discover", editProfile: "Edit Profile", howItWorks: "How It Works", yourSpace: "Space", yourConnections: "Connections", yourChats: "Chats", myJournal: "My Journal", theme: "Theme", language: "Language", viewProfile: "View Profile", songList: "Song List", allDoneTitle: "All Done!", allDoneSubtitle: "You've seen everyone. Check your connections and chats!", back: "Back", send: "Send", howToTitle: "How MusicLink Works", howToWelcome: "Welcome to MusicLink! Connect with motivational companions through the power of music.", howToLi1: "<strong>1. Discover:</strong> Swipe right on a companion you'd like to connect with. This will instantly 'sync' you!", howToLi2: "<strong>2. Collect Songs:</strong> Syncing immediately adds their top songs to your personal playlist.", howToLi3: "<strong>3. Vibe Check:</strong> After syncing, write your first message to unlock the chat and start the conversation.", howToLi4: "<strong>4. Chat:</strong> Get to know your companions. They're here to offer encouragement and motivation!", howToLi5: "<strong>5. Customize:</strong> Use the theme switcher and edit your profile in the sidebar.", editProfileTitle: "Edit Your Profile", editProfileSubtitle: "Customize your name and avatar.", editProfileNameLabel: "Your Name", editProfileAvatarLabel: "Avatar Image URL", editProfileButton: "Save Changes", journalTitle: "My Journal", journalSubtitle: "A diary of your journey and new connections.", journalSyncedWith: "Synced with", journalConnectedOn: "You connected on", journalSongsAdded: "Their songs are now in your playlist.", journalEmpty: "Your history will appear here as you sync with new companions!", playlistTitle: "Vibe Check:", playlistSubtitle: "You've synced! His top tracks are now in your playlist. Listen to his vibe and then send a first message to start the chat.", playlistPrompt: "Ready to connect? Write your first message to him.", playlistInputPlaceholder: "Say something cool...", listen: "Listen", listened: "Listened ✔", chatInputPlaceholder: "Type your message...", connectionsTitle: "Your Connections", connectionsEmpty: "Go to the Discover page and swipe right to sync with a companion!", chatsTitle: "Your Chats", chatsYou: "You: ", chatsEmpty: "Sync with someone to start your first conversation!", continueChat: "Continue Chat", profileQuotes: "Favorite Quotes", profileDiary: "Diary Entry", profileTracks: "Top Tracks",
    },
    ja: {
        player: "プレーヤー", // ADD THIS LINE
        menu: "メニュー", discover: "発見", editProfile: "プロフィール編集", howItWorks: "使い方", yourSpace: "スペース", yourConnections: "接続", yourChats: "チャット", myJournal: "日誌", theme: "テーマ", language: "言語", viewProfile: "プロフィールを見る", songList: "曲リスト", allDoneTitle: "完了！", allDoneSubtitle: "全員に会いました。接続とチャットを確認してください！", back: "戻る", send: "送信", howToTitle: "MusicLinkの使い方", howToWelcome: "MusicLinkへようこそ！音楽の力で、モチベーションを高める仲間と繋がりましょう。", howToLi1: "<strong>1. 発見：</strong>繋りたい相手を右にスワイプして「シンク」します！", howToLi2: "<strong>2. 曲を集める：</strong>シンクすると、相手のトップソングがあなたのプレイリストにすぐに追加されます。", howToLi3: "<strong>3. Vibeチェック：</strong>シンク後、最初のメッセージを送ってチャットを始めましょう。", howToLi4: "<strong>4. チャット：</strong>仲間と知り合いましょう。彼らはあなたを励まし、やる気を引き出してくれます！", howToLi5: "<strong>5. カスタマイズ：</strong>サイドバーでテーマを切り替えたり、プロフィールを編集したりできます。", editProfileTitle: "プロフィールを編集", editProfileSubtitle: "名前とアバターをカスタマイズします。", editProfileNameLabel: "あなたの名前", editProfileAvatarLabel: "アバター画像URL", editProfileButton: "変更を保存", journalTitle: "私の日誌", journalSubtitle: "あなたの旅と新しい繋がりの日記。", journalSyncedWith: "とシンクしました！", journalConnectedOn: "接続日：", journalSongsAdded: "彼の曲がプレイリストに追加されました。", journalEmpty: "新しい仲間とシンクすると、ここに履歴が表示されます！", playlistTitle: "Vibeチェック:", playlistSubtitle: "シンクしました！彼のトップトラックがあなたのプレイリストに追加されました。彼のバイブを感じて、最初のメッセージを送ってチャットを始めましょう。", playlistPrompt: "繋がる準備はできましたか？彼への最初のメッセージを書いてください。", playlistInputPlaceholder: "何かクールなことを言ってみよう...", listen: "聴く", listened: "聴いた ✔", chatInputPlaceholder: "メッセージを入力...", connectionsTitle: "あなたの接続", connectionsEmpty: "「発見」ページで右にスワイプして、仲間とシンクしましょう！", chatsTitle: "あなたのチャット", chatsYou: "あなた: ", chatsEmpty: "誰かとシンクして、最初の会話を始めましょう！", continueChat: "チャットを続ける", profileQuotes: "名言", profileDiary: "日記", profileTracks: "トップトラック",
    }
};

// --- NEW BOTTOM NAV BAR COMPONENT ---
function BottomNavBar({ currentPage, language, navigate, onToggleLeft, onToggleRight }) { // Note: onToggleRight is new here
    const navItems = [
        { page: 'discover', icon: 'home' },
        { page: 'connections', icon: 'users' },
        { page: 'chats', icon: 'message-square' },
        { page: 'journal', icon: 'book-open' },
    ];
    
    // Helper function to get the text for the current language
    const getNavText = (pageKey) => {
        const keyMap = {
            'discover': 'discover',
            'connections': 'yourConnections',
            'chats': 'yourChats',
            'journal': 'myJournal'
        };
        return uiText[language][keyMap[pageKey]].split('(')[0].trim();
    };

    return (
        <nav className="bottom-nav-bar">
             {/* The "Menu" button is now on the far left */}
            <button className="nav-bar-item" onClick={onToggleLeft}>
                <i data-feather="menu"></i>
                <span>{uiText[language].menu}</span>
            </button>

            {/* Main Navigation Items are in the middle */}
            {navItems.map(item => (
                 <button 
                    key={item.page}
                    className={`nav-bar-item ${currentPage === item.page ? 'active' : ''}`} 
                    onClick={() => navigate(item.page)}
                >
                    <i data-feather={item.icon}></i>
                    <span>{getNavText(item.page)}</span>
                </button>
            ))}
            
            {/* The new "Player" button is on the far right to open the right sidebar */}
            <button className="nav-bar-item" onClick={onToggleRight}>
                <i data-feather="music"></i>
                <span>{uiText[language].player}</span>
            </button>
        </nav>
    );
}

// --- MAIN APP COMPONENT ---
function App() {
    // --- STATE MANAGEMENT ---
    const [language, setLanguage] = useState(() => loadState('musicLink_language', 'en'));
    const [theme, setTheme] = useState(() => loadState('musicLink_theme', 'y2k-light'));
    const [connections, setConnections] = useState(() => rehydrateItems(loadState('musicLink_connections', [])));
    const [chats, setChats] = useState(() => loadState('musicLink_chats', {}));
    const [journal, setJournal] = useState(() => rehydrateJournal(loadState('musicLink_journal', [])));
    const [collectedSongs, setCollectedSongs] = useState(() => loadState('musicLink_collectedSongs', [...playerOneSongs]));
    const [userName, setUserName] = useState(() => loadState('musicLink_userName', "UserId✧ "));
    const [userAvatar, setUserAvatar] = useState(() => loadState('musicLink_userAvatar', null));
    const [discoverQueue, setDiscoverQueue] = useState(() => {
        const savedQueue = rehydrateItems(loadState('musicLink_discoverQueue', null));
        if (savedQueue && savedQueue.length > 0) return savedQueue;
        
        const currentConnections = rehydrateItems(loadState('musicLink_connections', []));
        const connectedIds = currentConnections.map(m => m.id);
        return charactersDataWithTranslations.filter(c => !connectedIds.includes(c.id));
    });

    const [currentPage, setCurrentPage] = useState('discover');
    const [activeScreen, setActiveScreen] = useState('main');
    const [activeCharacter, setActiveCharacter] = useState(null);
    const [nowPlayingIndex, setNowPlayingIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isAccordionOpen, setIsAccordionOpen] = useState(true);
    const [showHowToModal, setShowHowToModal] = useState(false);

    // State for mobile menus
    const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
    const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

    const nowPlaying = collectedSongs[nowPlayingIndex] || playerOneSongs[0];

    // --- PERSISTENCE & LIFECYCLE EFFECTS ---
    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('musicLink_theme', JSON.stringify(theme));
    }, [theme]);
    
    useEffect(() => {
        localStorage.setItem('musicLink_connections', JSON.stringify(connections));
        localStorage.setItem('musicLink_chats', JSON.stringify(chats));
        localStorage.setItem('musicLink_journal', JSON.stringify(journal));
        localStorage.setItem('musicLink_collectedSongs', JSON.stringify(collectedSongs));
        localStorage.setItem('musicLink_userName', JSON.stringify(userName));
        localStorage.setItem('musicLink_userAvatar', JSON.stringify(userAvatar));
        localStorage.setItem('musicLink_discoverQueue', JSON.stringify(discoverQueue));
        localStorage.setItem('musicLink_language', JSON.stringify(language));
    }, [connections, chats, journal, collectedSongs, userName, userAvatar, discoverQueue, language]);

    useEffect(() => {
        feather.replace();
    }, [theme, currentPage, activeScreen, discoverQueue, showHowToModal, connections, journal, isPlaying, chats, isAccordionOpen, language, isLeftSidebarOpen, isRightSidebarOpen]);

    // --- CORE LOGIC & HANDLERS ---
    const closeMobileMenus = () => {
        setIsLeftSidebarOpen(false);
        setIsRightSidebarOpen(false);
    };

    const getCompanionResponse = (character, text) => {
        const lowerText = text.toLowerCase().trim();
        const dialogue = character.dialogue[language];
        for (const keywordSet of dialogue.keywords) {
            for (const trigger of keywordSet.triggers) {
                if (lowerText.includes(trigger.toLowerCase())) {
                    return keywordSet.responses[Math.floor(Math.random() * keywordSet.responses.length)];
                }
            }
        }
        return dialogue.random[Math.floor(Math.random() * dialogue.random.length)];
    };
    
    const handleSwipe = (direction) => {
        if (discoverQueue.length === 0) return;
        const characterToSync = discoverQueue[0];
        if (direction === 'right') {
            if (!connections.find(c => c.id === characterToSync.id)) {
                setConnections(prev => [...prev, characterToSync]);
                setJournal(prev => [{ type: 'sync', character: characterToSync, date: new Date() }, ...prev]);
                const newSongs = characterToSync.playlist.filter(pSong => !collectedSongs.some(sSong => sSong.id === pSong.id));
                setCollectedSongs(prev => [...prev, ...newSongs]);
            }
            setDiscoverQueue(prev => prev.filter(p => p.id !== characterToSync.id));
            setActiveCharacter(characterToSync);
            setActiveScreen('playlist');
        } else {
            setDiscoverQueue(prev => [...prev.slice(1), prev[0]]);
        }
    };
    
    const handlePlaylistComplete = (firstMessage) => {
        const character = activeCharacter;
        const userMessage = { sender: 'user', text: firstMessage };
        const companionResponse = { sender: 'companion', text: getCompanionResponse(character, firstMessage) };
        setChats(prev => ({ ...prev, [character.id]: [userMessage, companionResponse] }));
        setActiveScreen('chat');
    };

    const handleSendMessage = (charId, text) => {
        const character = charactersDataWithTranslations.find(c => c.id === charId);
        const userMessage = { sender: 'user', text };
        const typingMessage = { sender: 'companion', text: '...', isTyping: true };
        setChats(prev => ({ ...prev, [charId]: [...(prev[charId] || []), userMessage, typingMessage] }));
        setTimeout(() => {
            const companionResponse = { sender: 'companion', text: getCompanionResponse(character, text) };
            setChats(prev => {
                const currentHistory = prev[charId].filter(m => !m.isTyping);
                return { ...prev, [charId]: [...currentHistory, companionResponse] };
            });
        }, 1500);
    };

    const handleProfileUpdate = (newName, newAvatarUrl) => {
        if (newName) setUserName(newName);
        setUserAvatar(newAvatarUrl);
        alert("Profile Saved!");
        navigate('discover');
    };
    
    const handlePlaySong = (songIndex) => {
        if (nowPlayingIndex === songIndex) {
            setIsPlaying(p => !p);
        } else {
            setNowPlayingIndex(songIndex);
            setIsPlaying(true);
        }
    };

    const handleNextSong = () => {
        if (collectedSongs.length === 0) return;
        setNowPlayingIndex(prevIndex => (prevIndex + 1) % collectedSongs.length);
        setIsPlaying(true);
    };

    const handlePrevSong = () => {
        if (collectedSongs.length === 0) return;
        setNowPlayingIndex(prevIndex => (prevIndex - 1 + collectedSongs.length) % collectedSongs.length);
        setIsPlaying(true);
    };
    
    // --- NAVIGATION ---
    const navigate = (page) => {
        setCurrentPage(page);
        setActiveScreen('main');
        setActiveCharacter(null);
        closeMobileMenus();
    };

    const viewProfile = (character) => {
        setActiveCharacter(character);
        setActiveScreen('profile');
        closeMobileMenus();
    };

    const viewChat = (character) => {
        setActiveCharacter(character);
        setActiveScreen('chat');
        closeMobileMenus();
    };

    // --- RENDER LOGIC ---
    const renderMainContent = () => {
        if (activeScreen === 'playlist') return <PlaylistScreen character={activeCharacter} onComplete={handlePlaylistComplete} language={language} />;
        if (activeScreen === 'chat') return <ChatScreen character={activeCharacter} chatHistory={chats[activeCharacter.id] || []} onSendMessage={handleSendMessage} onBack={() => navigate('chats')} language={language} />;
        if (activeScreen === 'profile') return <ProfilePage character={activeCharacter} onStartChat={() => viewChat(activeCharacter)} onBack={() => setActiveScreen('main')} language={language} />;
        
        switch(currentPage) {
            case 'connections': return <ConnectionsPage connections={connections} onProfileClick={viewProfile} language={language} />;
            case 'chats': return <ChatsListPage chats={chats} connections={connections} onChatClick={viewChat} language={language} />;
            case 'journal': return <JournalPage history={journal} language={language} />;
            case 'edit-profile': return <EditProfilePage currentUser={{ userName, userAvatar }} onSave={handleProfileUpdate} language={language} />;
            case 'discover':
            default:
                return (
                    <div className="main-content-area">
                        {discoverQueue.length > 0 ? (
                           <MatchingCard key={discoverQueue[0].id} character={discoverQueue[0]} onSwipe={handleSwipe} language={language} />
                        ) : (
                            <div className="page-container"><div className="page-header"><h1>{uiText[language].allDoneTitle}</h1><p>{uiText[language].allDoneSubtitle}</p></div></div>
                        )}
                    </div>
                );
        }
    };
    
    return (
        <>
            {showHowToModal && <HowToWorksModal onClose={() => setShowHowToModal(false)} language={language} />}
            
            {(isLeftSidebarOpen || isRightSidebarOpen) && (
                <div className="mobile-menu-backdrop" onClick={closeMobileMenus}></div>
            )}
            
            <div className="app-container">
                <aside className={`sidebar-left ${isLeftSidebarOpen ? 'is-open' : ''}`}>
                   <div className="logo"><i data-feather="link"></i> MusicLink</div>
                    <nav className="nav-section">
                        <h3 className="nav-title">{uiText[language].menu}</h3>
                        <ul className="nav-list">
                            <li className={`nav-item ${currentPage === 'discover' && 'active'}`} onClick={() => navigate('discover')}><i data-feather="home"></i>{uiText[language].discover}</li>
                            <li className={`nav-item ${currentPage === 'edit-profile' && 'active'}`} onClick={() => navigate('edit-profile')}><i data-feather="edit-2"></i>{uiText[language].editProfile}</li>
                            <li className="nav-item" onClick={() => { setShowHowToModal(true); closeMobileMenus(); }}><i data-feather="help-circle"></i>{uiText[language].howItWorks}</li>
                        </ul>
                    </nav>
                    <nav className="nav-section">
                        <h3 className="nav-title">{uiText[language].yourSpace}</h3>
                        <ul className="nav-list">
                            <li className={`nav-item ${currentPage === 'connections' && 'active'}`} onClick={() => navigate('connections')}><i data-feather="users"></i>{uiText[language].yourConnections} ({connections.length})</li>
                            <li className={`nav-item ${currentPage === 'chats' && 'active'}`} onClick={() => navigate('chats')}><i data-feather="message-square"></i>{uiText[language].yourChats} ({Object.keys(chats).length})</li>
                            <li className={`nav-item ${currentPage === 'journal' && 'active'}`} onClick={() => navigate('journal')}><i data-feather="book-open"></i>{uiText[language].myJournal}</li>
                        </ul>
                    </nav>
                    
                    <div className="sidebar-footer">
                        <nav className="nav-section">
                            <h3 className="nav-title">{uiText[language].theme}</h3>
                            <ThemeSwitcher currentTheme={theme} setTheme={setTheme} />
                        </nav>
                        <nav className="nav-section">
                            <h3 className="nav-title">{uiText[language].language}</h3>
                            <LanguageSwitcher currentLanguage={language} setLanguage={setLanguage} />
                        </nav>
                        <div className="storage-disclaimer">
                            <div className="notice-box">
                                <h4>Panda Hacks 2025</h4>
                                <p>Non-commercial educational website. Character assets used for illustrative purposes only under fair use and remain the property of their respective copyright holders.</p>
                            </div>
                        </div>
                    </div>
                </aside>

                <main className="main-content">{renderMainContent()}</main>

                <aside className={`sidebar-right ${isRightSidebarOpen ? 'is-open' : ''}`}>
                    <div className="player-one-profile">
                        <div className="p1-avatar">
                           {userAvatar ? <img src={userAvatar} alt="User Avatar" /> : <span>{userName.substring(0, 2)}</span>}
                        </div>
                        <div className="p1-info">
                            <h4>{userName}</h4>
                            <a href="#" onClick={(e) => { e.preventDefault(); navigate('edit-profile'); }}>{uiText[language].viewProfile}</a>
                        </div>
                    </div>
            
                    <div className="player-one-card">
                        <div className="p1-artwork">
                            <div className="vinyl-container">
                                <div className={`artwork-disc ${isPlaying ? 'spinning' : ''}`}>
                                    <img src={nowPlaying.artwork} alt={nowPlaying.title} />
                                </div>
                            </div>
                        </div>
                        <h3>{nowPlaying.title}</h3>
                        <p>{nowPlaying.artist}</p>
                        <div className="p1-controls">
                            <i data-feather="rewind" onClick={handlePrevSong}></i>
                            <div className="p1-play-button" onClick={() => setIsPlaying(p => !p)}>
                                <i data-feather={isPlaying ? "pause" : "play"} style={{marginLeft: isPlaying ? '0' : '4px'}}></i>
                            </div>
                            <i data-feather="fast-forward" onClick={handleNextSong}></i>
                        </div>
                    </div>

                    <div className="songs-accordion">
                        <div className="accordion-header" onClick={() => setIsAccordionOpen(p => !p)}>
                            <div><i data-feather="music"></i><span>{uiText[language].songList}</span></div>
                            <div>
                                <span className="stat-count">{collectedSongs.length}</span>
                                <i data-feather="chevron-down" className={`chevron ${isAccordionOpen ? 'open' : ''}`}></i>
                            </div>
                        </div>
                        <div className={`accordion-content ${isAccordionOpen ? 'open' : ''}`}>
                            {collectedSongs.map((song, index) => (
                                <div 
                                    key={song.id} 
                                    className={`accordion-song-item ${nowPlayingIndex === index ? 'playing' : ''}`}
                                    onClick={() => handlePlaySong(index)}
                                >
                                    <img src={song.artwork} alt={song.title} />
                                    <div className="song-details">
                                        <div className="song-title">{song.title}</div>
                                        <div className="song-artist">{song.artist}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
                
                {activeScreen === 'main' && 
    <BottomNavBar 
        currentPage={currentPage}
        language={language}
        navigate={navigate}
        onToggleLeft={() => setIsLeftSidebarOpen(p => !p)}
        onToggleRight={() => setIsRightSidebarOpen(p => !p)} // This line is new and essential
    />
}
            </div>
        </>
    );
}

// --- CHILD COMPONENTS ---

function LanguageSwitcher({ currentLanguage, setLanguage }) {
    return ( <div className="theme-switcher"> <button className={currentLanguage === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button> <button className={currentLanguage === 'ja' ? 'active' : ''} onClick={() => setLanguage('ja')}>JP</button> </div> );
}

function ThemeSwitcher({ currentTheme, setTheme }) {
    const themes = [ { id: 'minimal-light', name: 'Min L' }, { id: 'minimal-dark', name: 'Min D' }, { id: 'y2k-light', name: 'Y2K L' }, { id: 'y2k-dark', name: 'Y2K D' }, ];
    return ( <div className="theme-switcher"> {themes.map(theme => ( <button key={theme.id} className={currentTheme === theme.id ? 'active' : ''} onClick={() => setTheme(theme.id)}>{theme.name}</button> ))} </div> );
}

function HowToWorksModal({ onClose, language }) { const text = uiText[language]; return ( <div className="modal-backdrop" onClick={onClose}> <div className="modal-content" onClick={e => e.stopPropagation()}> <div className="modal-header"> <h2>{text.howToTitle}</h2> <button onClick={onClose} className="modal-close-btn">×</button> </div> <div className="modal-body"> <p>{text.howToWelcome}</p> <ul> <li dangerouslySetInnerHTML={{__html: text.howToLi1}}/> <li dangerouslySetInnerHTML={{__html: text.howToLi2}}/> <li dangerouslySetInnerHTML={{__html: text.howToLi3}}/> <li dangerouslySetInnerHTML={{__html: text.howToLi4}}/> <li dangerouslySetInnerHTML={{__html: text.howToLi5}}/> </ul> </div> </div> </div> ); }

function EditProfilePage({ currentUser, onSave, language }) { const [name, setName] = useState(currentUser.userName); const [avatar, setAvatar] = useState(currentUser.userAvatar || ''); const handleSubmit = (e) => { e.preventDefault(); onSave(name, avatar); }; const text = uiText[language]; return ( <div className="page-container"> <div className="page-header"> <h1>{text.editProfileTitle}</h1> <p>{text.editProfileSubtitle}</p> </div> <form onSubmit={handleSubmit} className="profile-form"> <div className="form-group"> <label htmlFor="name">{text.editProfileNameLabel}</label> <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} /> </div> <div className="form-group"> <label htmlFor="avatar">{text.editProfileAvatarLabel}</label> <input type="text" id="avatar" value={avatar} onChange={e => setAvatar(e.target.value)} placeholder="https://example.com/image.png" /> </div> <div className="form-group"> <button type="submit" className="action-btn">{text.editProfileButton}</button> </div> </form> </div> ); }

function JournalPage({ history, language }) { const text = uiText[language]; return ( <div className="page-container"> <div className="page-header"> <h1>{text.journalTitle}</h1> <p>{text.journalSubtitle}</p> </div> <div className="chat-list-container"> {history.length > 0 ? history.map((event, index) => { if (event.type === 'sync') { const { character, date } = event; return ( <div key={index} className="chat-list-item" style={{alignItems:'flex-start'}}> <img src={character.avatar} alt={character.name[language]} /> <div className="chat-list-info"> <h4>{character.name[language]} {text.journalSyncedWith}</h4> <p>{text.journalConnectedOn} {new Date(date).toLocaleDateString()}. {text.journalSongsAdded}</p> </div> </div> ); } return null; }) : <p>{text.journalEmpty}</p>} </div> </div> ); }

function MatchingCard({ character, onSwipe, language }) {
    // State to control the exit animation
    const [exitDirection, setExitDirection] = useState(null);

    // This function will be called by the buttons
    const handleChoice = (direction) => {
        // 1. Set the state to trigger the exit animation class on the card
        setExitDirection(direction);

        // 2. Wait for the animation to finish (300ms, matching our CSS)
        setTimeout(() => {
            // 3. AFTER the animation, call the onSwipe prop to load the next card
            onSwipe(direction);
        }, 300);
    };

    // Create a dynamic class for the card to apply the animation
    const cardClassName = `husbando-card ${exitDirection ? `exiting-${exitDirection}` : ''}`;

    return (
        <div className={cardClassName}>
            {/* The old swipe overlays are removed */}
            <div className="card-image" style={{ backgroundImage: `url(${character.mainImage})` }}></div>
            <div className="card-info">
                <h2>{character.name[language]}</h2>
                <p>{character.series[language]}</p>
            </div>
            
            {/* --- NEW ACTION BUTTONS --- */}
            <div className="card-actions">
                <button 
                    className="action-button skip" 
                    onClick={() => handleChoice('left')}
                    aria-label="Skip"
                >
                    <i data-feather="x"></i>
                </button>
                <button 
                    className="action-button sync" 
                    onClick={() => handleChoice('right')}
                    aria-label="Sync"
                >
                    <i data-feather="heart"></i>
                </button>
            </div>
        </div>
    );
}
function PlaylistScreen({ character, onComplete, language }) { const [playedSongs, setPlayedSongs] = useState([]); const text = uiText[language]; return ( <div className="screen-container"> <div className="y2k-content-wrapper"> <div className="screen-header"> <img src={character.avatar} alt={character.name[language]} /> <h2>{text.playlistTitle} {character.name[language]}</h2> <p>{text.playlistSubtitle}</p> </div> <div className="song-list"> {character.playlist.map(song => ( <div className="song-item" key={song.id}> <div><h4>{song.title}</h4><p>{song.artist}</p></div> <button className={`listen-btn ${playedSongs.includes(song.id) ? 'played' : ''}`} onClick={() => {if (!playedSongs.includes(song.id)) setPlayedSongs(p => [...p, song.id]);}}> {playedSongs.includes(song.id) ? text.listened : text.listen} </button> </div> ))} </div> <div className="chat-prompt"> <p>{text.playlistPrompt}</p> <form className="chat-input-form" onSubmit={(e) => { e.preventDefault(); onComplete(e.target.elements.message.value); }}> <input name="message" type="text" placeholder={text.playlistInputPlaceholder} autoFocus required /> <button type="submit">{text.send}</button> </form> </div> </div> </div> ); }

function ChatScreen({ character, chatHistory, onSendMessage, onBack, language }) { const [newMessage, setNewMessage] = useState(""); const messageListRef = useRef(null); useEffect(() => { if (messageListRef.current) { messageListRef.current.scrollTop = messageListRef.current.scrollHeight; } }, [chatHistory]); const handleSend = (e) => { e.preventDefault(); if (!newMessage.trim()) return; onSendMessage(character.id, newMessage); setNewMessage(""); }; return ( <div className="screen-container"> <div className="chat-header"> <button onClick={onBack} className="nav-item"><i data-feather="arrow-left"></i></button> <img src={character.avatar} alt={character.name[language]} /> <div><h4>{character.name[language]}</h4></div> </div> <div className="message-list" ref={messageListRef}> {(chatHistory || []).map((msg, index) => ( <div key={index} className={`message-bubble ${msg.sender} ${msg.isTyping ? 'typing' : ''}`}><div className="message-content">{msg.text}</div></div> ))} </div> <div className="chat-input-area"> <form className="chat-input-form" onSubmit={handleSend}> <input type="text" placeholder={uiText[language].chatInputPlaceholder} value={newMessage} onChange={e => setNewMessage(e.target.value)} /> <button type="submit">{uiText[language].send}</button> </form> </div> </div> ); }

function ConnectionsPage({ connections, onProfileClick, language }) { const text = uiText[language]; const subtitle = `You've synced with ${connections.length} companion${connections.length !== 1 ? 's' : ''}.`; const subtitle_ja = `${connections.length}人の仲間とシンクしました。`; return ( <div className="page-container"> <div className="y2k-content-wrapper"> <div className="page-header"><h1>{text.connectionsTitle}</h1><p>{language === 'en' ? subtitle : subtitle_ja}</p></div> {connections.length > 0 ? ( <div className="matches-grid"> {connections.map(conn => ( <div className="match-card" key={conn.id} onClick={() => onProfileClick(conn)}> <img src={conn.mainImage} alt={conn.name[language]} /> <div className="match-card-info"><h4>{conn.name[language]}</h4><p>{conn.series[language]}</p></div> </div> ))} </div> ) : <p>{text.connectionsEmpty}</p>} </div> </div> ); }

function ChatsListPage({ chats, connections, onChatClick, language }) { const chatIds = Object.keys(chats); const text = uiText[language]; const subtitle = `You have ${chatIds.length} ongoing conversation${chatIds.length !== 1 ? 's' : ''}.`; const subtitle_ja = `${chatIds.length}件の会話があります。`; return ( <div className="page-container"> <div className="y2k-content-wrapper"> <div className="page-header"><h1>{text.chatsTitle}</h1><p>{language === 'en' ? subtitle : subtitle_ja}</p></div> {chatIds.length > 0 ? ( <div className="chat-list-container"> {chatIds.map(charId => { const character = connections.find(m => m.id == charId); if (!character) return null; const lastMessage = chats[charId][chats[charId].length - 1]; return ( <div key={charId} className="chat-list-item" onClick={() => onChatClick(character)}> <img src={character.avatar} alt={character.name[language]} /> <div className="chat-list-info"> <h4>{character.name[language]}</h4> <p>{lastMessage.sender === 'user' ? text.chatsYou : ''}{lastMessage.text}</p> </div> </div> ); })} </div> ) : <p>{text.chatsEmpty}</p>} </div> </div> ); }

function ProfilePage({ character, onStartChat, onBack, language }) { const text = uiText[language]; return ( <div className="page-container"> <div className="y2k-content-wrapper"> <button onClick={onBack} className="nav-item"><i data-feather="arrow-left"></i> {text.back}</button> <div className="profile-container"> <div className="profile-header"> <img className="profile-main-image" src={character.mainImage} alt={character.name[language]} /> <div className="profile-details"> <h1>{character.name[language]}</h1> <h3>{character.series[language]}</h3> <p>{character.personality[language]}</p> <div className="profile-actions"> <button className="action-btn" onClick={onStartChat}><i data-feather="message-circle"></i> {text.continueChat}</button> </div> </div> </div> <div className="profile-section"> <h4>{text.profileQuotes}</h4> {character.quotes[language].map((q, i) => <div key={i} className="profile-quote"><p>"{q}"</p></div>)} </div> <div className="profile-section"> <h4>{text.profileDiary}</h4> {character.diary[language].map((d, i) => <div key={i} className="profile-diary-entry"><p>{d.entry}</p><span className="date">- {d.date}</span></div>)} </div> <div className="profile-section"> <h4>{text.profileTracks}</h4> <div className="song-list" style={{padding: '0'}}> {character.playlist.map(song => ( <div className="song-item" key={song.id} style={{paddingLeft: 0, paddingRight: 0}}> <div><h4>{song.title}</h4><p>{song.artist}</p></div> </div> ))} </div> </div> </div> </div> </div> ); }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
