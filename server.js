var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
    'article-one' : {
        title: 'Article-One | Chetan Singh',
        heading: 'Article One',
        date: 'Feb 26, 2018',
        content: `
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Massa eget egestas purus viverra accumsan in nisl nisi. Cursus euismod quis viverra nibh. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Pretium vulputate sapien nec sagittis. Neque vitae tempus quam pellentesque nec nam. Tortor posuere ac ut consequat semper. Massa tincidunt dui ut ornare lectus. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Elementum nibh tellus molestie nunc non. 
            </p>`

},
    'article-two' : {
        title: 'Article-Two | Chetan Singh',
        heading: 'Article Two',
        date: 'Feb 27, 2018',
        content: `
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Massa eget egestas purus viverra accumsan in nisl nisi. Cursus euismod quis viverra nibh. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Pretium vulputate sapien nec sagittis. Neque vitae tempus quam pellentesque nec nam. Tortor posuere ac ut consequat semper. Massa tincidunt dui ut ornare lectus. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Elementum nibh tellus molestie nunc non. 
            </p>`},
    'article-three' : {
        title: 'Article-Three | Chetan Singh',
        heading: 'Article Three',
        date: 'March 1, 2018',
        content: `
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Massa eget egestas purus viverra accumsan in nisl nisi. Cursus euismod quis viverra nibh. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Pretium vulputate sapien nec sagittis. Neque vitae tempus quam pellentesque nec nam. Tortor posuere ac ut consequat semper. Massa tincidunt dui ut ornare lectus. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Elementum nibh tellus molestie nunc non. 
            </p>`
    }
};

function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
    <html>
        <head>
            <title>${title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
    
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/> 
                <h3>${heading}
                </h3>
                <div>${date}
                </div>
                <div>
                ${content}
                </div>
            </div>
        </body>
    </html>
`;
    return htmlTemplate;
    }
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
