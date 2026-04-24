# TiraTalk — Frontend

Lightweight React + Vite frontend for the TiraTalk WebSocket chat demo.

Overview
--------
This frontend connects to the Spring Boot WebSocket backend (SockJS + STOMP)
and provides a compact, boxed chat UI. It supports display names, join/leave
notifications, and local-only chat clearing. The UI is intentionally simple
so you can plug it into the demo backend quickly.

Key Features
------------
- Real-time chat using SockJS + STOMP
- Display names with deterministic sender color
- Join/Leave notifications
- Local clear chat (clears only the current client's view)

Tech Stack
----------
- React + Vite
- `sockjs-client` and `@stomp/stompjs`

Run Locally
-----------
Start the backend (from repository root):

```powershell
$env:JAVA_HOME='C:\Program Files\Java\jdk-25.0.2'
$env:PATH='C:\Program Files\Java\jdk-25.0.2\bin;' + $env:PATH
cd /d D:\FS2\exp-10-main\demo_websocket
.\mvnw.cmd spring-boot:run
```

Start the frontend (in a separate terminal):

```powershell
cd /d D:\FS2\exp-10-main\app\frontend
npm install
npm run dev
```

Open http://localhost:3000 in two separate browser windows (or one normal + one private/incognito) and join with two different names to see real-time messaging.

WebSocket / API Contract
------------------------
- SockJS endpoint: `http://localhost:8080/ws`
- Subscribe topic: `/topic/public`
- Send destination: `/app/chat.sendMessage`
- (Optional) History API: `GET http://localhost:8080/api/messages` — used if backend provides it

Screenshots
-----------
Place two screenshots here (or in `public/SS/`) and replace the paths below.

![Screenshot 1](./public/SS/screenshot1.png)

![Screenshot 2](./public/SS/screenshot2.png)

Notes
-----
- To include screenshots: create `public/SS/` and add `screenshot1.png` and `screenshot2.png`, or edit the image paths above.
- If the frontend console shows `global is not defined` errors, ensure `index.html` contains the `window.global` polyfill (already added in this project).

Contributors
------------
- Your project (modified by upgrade agent)
