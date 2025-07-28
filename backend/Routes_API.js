// 🔐 AUTH ROUTES(/api/auth)

// 1. Register
// POST / api / auth / register
// 📦 Form - Data:
// username: testuser
// email: test @example.com
// password: 123456
// role: admin
// bio : author
// avatar: [file]

// 2. Login
// POST / api / auth / login
// 📦 JSON:
// {
//     "email": "test@example.com",
//     "password": "123456"
// }

// 3. Get My Profile
// GET / api / auth / profile
// 🛡️ Header:
// Authorization: Bearer < token >


// 4. Update My Profile
// PUT / api / auth / profile
// 📦 Form - Data:
// username: updatedName
// email: updated @example.com
// avatar: [file]


// 👑 ADMIN USER ROUTES(/api/auth / users)


// 5. Get All Users
// GET / api / auth / users
// 🛡️ Header: Authorization: Bearer < admin - token >


// 6. Update Any User by ID
// PUT / api / auth / users /: id
// 📦 Form - Data(any or all fields):
// username: newname
// email: newemail @example.com
// role: admin
// avatar: [file]


// 7. Delete User
// DELETE / api / auth / users /: id
// 🛡️ Header: Authorization: Bearer < admin - token >




// 📝 BLOG ROUTES(/api/blogs)

// 1. Get All Public Blogs
// GET / api / blogs

// 2. Filter Blogs by Tag or Category
// GET / api / blogs / filter ? tag = react
// GET / api / blogs / filter ? status = react

// 3. Get My Blogs
// GET / api / blogs / user / me
// 🛡️ Header: Authorization: Bearer < token >


// 4. Create Blog
// POST / api / blogs
// 🛡️ Header: Authorization: Bearer < user - token >
// 📦 Form - Data:
// title: My Blog Title
// content: This is a blog post.
// tags: react, nodejs, mongodb
// status: public
// isFeatured: false
// image: [file]

// 5. Update Blog
// PUT / api / blogs /: id
// 🛡️ Header: Authorization: Bearer < token >
// 📦 JSON:
// {
//     "title": "Updated Title",
//     "content": "Updated content",
//      "tags": ["updated", "blog"],
//      "status": "draft"
// }


// 6. Delete Blog
// DELETE / api / blogs /: id
// 🛡️ Header: Authorization: Bearer < token >

// 7. Blog Likes
// http://localhost:8000/api/blogs/68876a461baba566dd169329/like


// 🛠️ ADMIN BLOG ROUTES
// 8. Get All Blogs(Admin)
// GET / api / blogs / admin / all
// 🛡️ Header: Authorization: Bearer < admin - token >






// 💬 COMMENT ROUTES(/api/comments)
// 1. Add Comment to Blog
// POST / api / comments /: postId
// 🛡️ Header: Authorization: Bearer < token >
// 📦 JSON:
// {
//     "content": "This is my comment"
// }


// 2. Get Comments for Blog
// GET / api / comments /: postId


// 3. Delete Comment
// DELETE / api / comments /: id
// 🛡️ Header: Authorization: Bearer < token >





// 1. Get Blog by ID
// GET / api / blogs /: id