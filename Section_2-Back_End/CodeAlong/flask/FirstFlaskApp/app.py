from flask import Flask, request, render_template, redirect, flash, jsonify
from random import randint, choice, sample
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = 'chickenzarecool'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

MOVIES = {'Amadeus', 'Chicken Run', 'Dances With Wolves'}

@app.route('/')
def home_page():
    """Simple home page with link to hello page"""
    return render_template("index.html")

@app.route('/old-home-page')
def redirect_to_home():
    """Redirect to new home page"""
    flash('That page has moved! This is our new home page!')
    return redirect("/")

@app.route('/movies')
def show_all_movies():
    """Show list of all movies in fake DB"""
    return render_template("movies.html", movies=MOVIES)

@app.route('/movies/json')
def get_movies_json():
    """Fake API for movies"""
    return jsonify(list(MOVIES))

@app.route('/movies/new', methods=["POST"])
def add_new_movie():
    """Add new movie to fake DB"""
    new_movie = request.form["title"]
    if new_movie in MOVIES:
        flash('Movie Already Exists', 'error')
    else:
        MOVIES.add(new_movie)
        flash("Created Your Movie!", 'success')
    return redirect("/movies")

@app.route('/form')
def show_form():
    """Compliment form"""
    return render_template("form.html")

@app.route('/form-2')
def show_form_2():
    """Improved Compliment form"""
    return render_template("form_2.html")

COMPLIMENTS = ["cool", "clever", "tenacious", "awesome", "wonderful", "Pythonic"]

@app.route('/greet')
def get_greeting():
    """Greeting Page"""
    username = request.args["username"]
    compliment = choice(COMPLIMENTS)
    return render_template("greet.html", username=username, compliment=compliment)

@app.route('/greet-2')
def get_greeting_2():
    """Improved Greeting Page"""
    username = request.args["username"]
    wants = request.args.get("wants_compliments")
    compliments = sample(COMPLIMENTS, 3)
    return render_template("greet_2.html", username=username, wants_compliments=wants, compliments=compliments)

@app.route('/lucky')
def lucky_number():
    """Lucky Number Generator"""
    num = randint(1, 10)
    return render_template('lucky.html', lucky_num = num, msg = "You are so lucky!")

@app.route('/spell/<word>')
def spell_word(word):
    """Word Speller"""
    caps_word = word.upper()
    return render_template('spell_word.html', word=caps_word)

@app.route('/hello')
def say_hello():
    """Simple hello page"""
    return render_template("hello.html")

@app.route('/search')
def search():
    """Pretends to search for given term with a given sort parameter"""
    term = request.args["term"]
    sort = request.args["sort"]
    return f"<h1>Search Results For: {term}</h1> <p>Sorting by: {sort}</p>"

@app.route("/add-comment")
def add_comment_form():
    """Renders a form for user to add a comment"""
    return """
    <h1>Add Comment</h1>
    <form method="POST">
        <input type='text' placeholder='comment' name='comment'/>
        <input type='text' placeholder='username' name='username'/>
        <button>Submit</button>
    </form>
    """
@app.route('/add-comment', methods=["POST"])
def save_comment():
    """Pretends to save comment data"""
    comment = request.form["comment"]
    username = request.form["username"]
    return f"""
    <h1>Saved your comment</h1>
    <ul>
        <li>Username: {username}</li>
        <li>Comment: {comment}</li>
    </ul>
    """

@app.route('/r/<subreddit>')
def show_subreddit(subreddit):
    """Handling route variables"""
    return f"<h1>This is the {subreddit} subreddit!</h1>"

@app.route("/r/<subreddit>/comments/<post_id>")
def show_comments(subreddit, post_id):
    """Handling multiple route variables"""
    return f"<h1>Viewing comments for post with id: {post_id} from the {subreddit} Subreddit."


POSTS = {
    1: "I like chicken tenders",
    2: "I hate mayo!",
    3: "Double rainbow all the way",
    4: "YOLO OMG (kill me)"
}

@app.route('/posts/<int:id>')
def find_post(post_id):
    """Handling path variables"""
    post = POSTS.get(post_id, "Post not found :(")
    return f"<p>{post}</p>"
