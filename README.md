# User Management API

A RESTful API built with Node.js, Express, and MongoDB for managing user data. This project provides CRUD operations for user management with logging capabilities.

## 🚀 Features

- **User Management**: Full CRUD operations for users
- **MongoDB Integration**: Persistent data storage with MongoDB
- **Request Logging**: Automatic logging of all API requests
- **RESTful API**: Standard REST endpoints following best practices
- **Error Handling**: Comprehensive error handling and status codes

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas account)
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd data
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure MongoDB connection**
   
   Update the MongoDB connection string in `connections.js`:
   ```javascript
   const url = "your-mongodb-connection-string";
   ```

4. **Start the server**
   ```bash
   npm start
   ```

   The server will start on port 8000.

## 📚 API Endpoints

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| POST | `/api/users` | Create a new user |
| PATCH | `/api/users/:id` | Update user (partial) |
| DELETE | `/api/users/:id` | Delete user by ID |

### Request/Response Examples

#### Create User
```bash
POST /api/users
Content-Type: application/json

{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "gender": "male"
}
```

#### Get All Users
```bash
GET /api/users
```

#### Get User by ID
```bash
GET /api/users/:id
```

#### Update User
```bash
PATCH /api/users/:id
Content-Type: application/json

{
  "first_name": "Jane",
  "email": "jane.doe@example.com"
}
```

#### Delete User
```bash
DELETE /api/users/:id
```

## 📁 Project Structure

```
├── index.js              # Main application entry point
├── connections.js         # MongoDB connection configuration
├── package.json          # Project dependencies and scripts
├── log.txt              # Request logs (auto-generated)
├── controllers/
│   └── user.js          # User controller with CRUD operations
├── models/
│   └── users.js         # User schema and model
├── routes/
│   └── user.js          # User routes definition
├── middleware/
│   └── log.js           # Request logging middleware
└── views/               # View templates (if any)
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=8000
MONGODB_URI=your-mongodb-connection-string
```

### MongoDB Schema

The User model includes the following fields:

- `first_name` (String, required)
- `last_name` (String, required)
- `email` (String, required, unique)
- `gender` (String, required)

## 📝 Logging

All API requests are automatically logged to `log.txt` with timestamps and request details.

## 🚀 Running the Application

### Development
```bash
npm start
```

### Production
```bash
NODE_ENV=production npm start
```

The server will be available at `http://localhost:8000`

## 🧪 Testing

Currently, no test scripts are configured. To add tests:

1. Install a testing framework (Jest, Mocha, etc.)
2. Create test files in a `tests/` directory
3. Update the `package.json` scripts

## 📦 Dependencies

- **express**: Web framework for Node.js
- **mongoose**: MongoDB object modeling tool

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

If you encounter any issues or have questions, please:

1. Check the existing issues
2. Create a new issue with detailed information
3. Include error logs and steps to reproduce

## 🔒 Security Notes

- Update the MongoDB connection string with your own credentials
- Consider using environment variables for sensitive information
- Implement proper authentication and authorization for production use
- Add input validation and sanitization
- Use HTTPS in production environments 
