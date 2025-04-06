# WhatsApp Web Clone (with Video Calls)

This is a **WhatsApp Web clone** application built with **ReactJS** for the frontend (whatsapp-fe) and **Node.js** for the backend (whatsapp-be). It mimics core features of WhatsApp, including text messaging, media sharing, and video calls.

## Features

- **Real-time Chat**: Send and receive text messages in real-time.
- **Media Sharing**: Share images, videos, and files.
- **Video Calls**: Support for high-quality video calling between users.
- **User Authentication**: Users can sign up and log in securely.
- **Responsive Design**: Optimized for both desktop and mobile web views.
- **User Status**: Show online/offline status of users.

## Tech Stack

### Frontend (whatsapp-fe)

- **ReactJS**: A JavaScript library for building user interfaces.
- **Redux**: For state management.
- **Socket.io**: Real-time communication for chat functionality.
- **WebRTC**: For peer-to-peer video calling.
- **CSS/Styled Components**: For styling and responsive layouts.

### Backend (whatsapp-be)

- **Node.js**: A JavaScript runtime for the server-side code.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing user data and messages.
- **Socket.io**: For real-time communication between the server and frontend.
- **JWT**: JSON Web Tokens for secure user authentication.

## Installation

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn
- MongoDB (either local installation or cloud service like MongoDB Atlas)

### Setup

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/whatsapp-web-clone.git
cd whatsapp-web-clone
```

#### 2. Install dependencies for frontend (whatsapp-fe)

```bash
cd whatsapp-fe
npm install
```

or

```bash
cd whatsapp-fe
yarn install
```

#### 3. Install dependencies for backend (whatsapp-be)

```bash
cd whatsapp-be
npm install
```

or

```bash
cd whatsapp-be
yarn install
```

#### 4. Configure environment variables

- **whatsapp-be/.env**:
  - Add your MongoDB URI (if using MongoDB Atlas).
  - Set a **JWT_SECRET** for securing JWT tokens.

```env
MONGO_URI=mongodb://localhost:27017/whatsapp
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

- **whatsapp-fe/.env**:
  - Set the backend API URL for the frontend to communicate with.

```env
REACT_APP_API_URL=http://localhost:5000
```

#### 5. Run the Backend Server

```bash
cd whatsapp-be
npm start
```

or

```bash
cd whatsapp-be
yarn start
```

The backend should now be running on **http://localhost:5000**.

#### 6. Run the Frontend Server

```bash
cd whatsapp-fe
npm start
```

or

```bash
cd whatsapp-fe
yarn start
```

The frontend should now be accessible at **http://localhost:3000**.

## Usage

- **Sign up** or **Log in** to start using the app.
- Send messages in real-time to other users who are online.
- Share images, videos, and files with your contacts.
- Start a **video call** with any user from your contact list by clicking the video call icon.

## Video Calls

This application uses **WebRTC** to establish peer-to-peer video calls. The backend facilitates the signaling process (using **Socket.io**) to initiate the call, while WebRTC handles the actual media streaming between users.

### To start a video call:

1. Click on the **video call icon** in the chat interface.
2. Your browser will ask for permission to use your camera and microphone.
3. Once both users accept, the video call will begin.

## Contributing

We welcome contributions! If you'd like to improve the project, please fork the repository, create a new branch, and submit a pull request.

### Steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature/your-feature-name`).
5. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, feel free to reach out to me at [your-email@example.com].

---

Happy coding! 🎉
