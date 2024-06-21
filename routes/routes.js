import express from 'express';
import { findByIdAndDelete, findByIdAndUpdate, findObjectById, addNewObject } from '../routes/functions.js';
import { posts } from '../routes/posts.js';

const router = express.Router();

// Routes
router.get('/', (req, res) => {

	posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
	let showPerPage = 10;
	let page = req.query.page || 0;

	const startIndex = page * showPerPage;
  const endIndex = startIndex + showPerPage;
  const paginatedPosts = posts.slice(startIndex, endIndex);

	const count = posts.length
	const nextPage = parseInt(page) + 1;
	
	let hasNextPage = page < Math.ceil(count / showPerPage) - 1;

	const locals = {
		title: "NodeJS Blog",
		description: "Building a blog using NodeJS and Express",
	}
	res.render('index.ejs', { locals, posts: paginatedPosts, nextPage: nextPage, hasNextPage: hasNextPage});
});

router.get('/post/:id', (req, res) => {

	const reqPost = findObjectById(posts, parseInt(req.params.id))

	const locals = {
		title: reqPost.title,
		description: "Building a blog using NodeJS and Express"
	}
	res.render('post.ejs', { locals, reqPost: reqPost});
})

router.get('/about', (req, res) => {
	res.render('about.ejs')
}
)
router.get('/contact', (req, res) => {
	res.render('contact.ejs')
})

router.post('/add-post', (req, res) => {

  addNewObject(posts, req.body.title.trim(), req.body.body.trim())

	res.redirect('/')
	
});

router.get('/edit-post/:id', (req, res) => {

  const data = findObjectById(posts, parseInt(req.params.id));

	const locals = {
		title: "Edit Post",
		description: "Free NodeJs User Management System",
	};

	res.render('edit-post.ejs', { locals, data })
});

router.post('/edit-post/:id', (req, res) => {

  findByIdAndUpdate(posts, parseInt(req.params.id), req.body);

	res.redirect(`/post/${req.params.id}`);
});

router.post('/delete-post/:id', (req, res) => {

  findByIdAndDelete(posts, parseInt(req.params.id));

res.redirect('/');
});

export default router