# Changelog


## v0.0.5

[compare changes](https://github.com/ahmedrangel/riftboard-client/compare/v0.0.4...v0.0.5)

### 🩹 Fixes

- **league:** Adjust dragon soul and rune safety ([7417804](https://github.com/ahmedrangel/riftboard-client/commit/7417804))

### ❤️ Contributors

- Ahmed Rangel ([@ahmedrangel](https://github.com/ahmedrangel))

## v0.0.4

[compare changes](https://github.com/ahmedrangel/riftboard-client/compare/v0.0.3...v0.0.4)

### 💅 Refactors

- **cmd:** Replace PowerShell script with koffi API ([737bb73](https://github.com/ahmedrangel/riftboard-client/commit/737bb73))

### ❤️ Contributors

- Ahmed Rangel <ahmedrangel@outlook.com>

## v0.0.3

[compare changes](https://github.com/ahmedrangel/riftboard-client/compare/v0.0.2...v0.0.3)

### 🩹 Fixes

- **ci:** Release workflow on Windows ([80b827e](https://github.com/ahmedrangel/riftboard-client/commit/80b827e))

### ❤️ Contributors

- Ahmed Rangel ([@ahmedrangel](https://github.com/ahmedrangel))

## v0.0.2

[compare changes](https://github.com/ahmedrangel/riftboard-client/compare/v0.0.1...v0.0.2)

### 🏡 Chore

- Update package metadata ([3e1c938](https://github.com/ahmedrangel/riftboard-client/commit/3e1c938))

### ❤️ Contributors

- Ahmed Rangel ([@ahmedrangel](https://github.com/ahmedrangel))

## v0.0.1


### 🚀 Enhancements

- Switch twitch auth to web session flow (authorization code) ([739eaa4](https://github.com/JimRsng/riftboard-client/commit/739eaa4))
- **tray:** Add systray and packaged assets ([1535e42](https://github.com/JimRsng/riftboard-client/commit/1535e42))
- **cli:** Add tunnel flag for cloudflared ([ed15ed5](https://github.com/JimRsng/riftboard-client/commit/ed15ed5))
- **league:** Add game startedAt timestamp ([0aa2fd5](https://github.com/JimRsng/riftboard-client/commit/0aa2fd5))
- **league:** Include current summoner info ([6d9c06b](https://github.com/JimRsng/riftboard-client/commit/6d9c06b))

### 🩹 Fixes

- **league:** Use singleton LeagueService instance ([74b2ba0](https://github.com/JimRsng/riftboard-client/commit/74b2ba0))
- Init occurs inside getInstance ([077b128](https://github.com/JimRsng/riftboard-client/commit/077b128))
- Type error ([28f7d1e](https://github.com/JimRsng/riftboard-client/commit/28f7d1e))
- **league:** Include dragon soul in game data ([2959514](https://github.com/JimRsng/riftboard-client/commit/2959514))
- **auth:** Decode session, parallelize setup ([bdf60bf](https://github.com/JimRsng/riftboard-client/commit/bdf60bf))
- **twitch:** Auto-open browser for auth + fallback with URL display ([fbe36e6](https://github.com/JimRsng/riftboard-client/commit/fbe36e6))
- **socket:** Skip unchanged game data broadcasts ([843565a](https://github.com/JimRsng/riftboard-client/commit/843565a))
- Replace process.exit calls with proper errors ([75c6e52](https://github.com/JimRsng/riftboard-client/commit/75c6e52))
- Cache verify state per session SID ([1b9c3a7](https://github.com/JimRsng/riftboard-client/commit/1b9c3a7))
- **cli:** Pause before exit on startup errors ([c9767cd](https://github.com/JimRsng/riftboard-client/commit/c9767cd))
- Embed app icon in Windows metadata ([f812676](https://github.com/JimRsng/riftboard-client/commit/f812676))
- **socket:** Use nested game.started flag ([d305bbc](https://github.com/JimRsng/riftboard-client/commit/d305bbc))
- **league:** Auto-refresh and reconnect handling ([440374d](https://github.com/JimRsng/riftboard-client/commit/440374d))
- Stabilize console restore on Windows ([db90c54](https://github.com/JimRsng/riftboard-client/commit/db90c54))
- **tray:** Enable themed Windows tray menus ([e09a47e](https://github.com/JimRsng/riftboard-client/commit/e09a47e))
- **league:** Add .ts to cmd import ([fd95f15](https://github.com/JimRsng/riftboard-client/commit/fd95f15))
- **tray:** Adjust Windows menu Y position ([8668770](https://github.com/JimRsng/riftboard-client/commit/8668770))
- **pkg:** Handle assets and binaries in dev mode ([01abb91](https://github.com/JimRsng/riftboard-client/commit/01abb91))
- **metadata:** Use package name in app title ([b4ece04](https://github.com/JimRsng/riftboard-client/commit/b4ece04))

### 💅 Refactors

- **branding:** Rename client to lolscoreboard ([40dcdf3](https://github.com/JimRsng/riftboard-client/commit/40dcdf3))
- Simplify auth and sync flow ([2bc0a3e](https://github.com/JimRsng/riftboard-client/commit/2bc0a3e))
- **league:** Expose cdn/version in response ([956a8d5](https://github.com/JimRsng/riftboard-client/commit/956a8d5))
- Runtime config and auth flow ([b2d2afe](https://github.com/JimRsng/riftboard-client/commit/b2d2afe))
- Track auth state in runtime session ([b1c263c](https://github.com/JimRsng/riftboard-client/commit/b1c263c))
- **branding:** Rename app to riftboard ([537b8c8](https://github.com/JimRsng/riftboard-client/commit/537b8c8))

### 🏡 Chore

- Remove initial metadata icon ([f35f9cd](https://github.com/JimRsng/riftboard-client/commit/f35f9cd))
- Clarify setup success terminal requirement ([e350d09](https://github.com/JimRsng/riftboard-client/commit/e350d09))
- **tray:** Simplify tray init log messages ([ed71164](https://github.com/JimRsng/riftboard-client/commit/ed71164))

### ❤️ Contributors

- Ahmed Rangel ([@ahmedrangel](https://github.com/ahmedrangel))

