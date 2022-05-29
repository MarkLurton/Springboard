from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, Department, Employee, get_directory, get_directory_join, get_directory_all_join, Project, EmployeeProject
from forms import AddSnackForm, EmployeeForm

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///employees_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = 'letsgostros'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)

@app.route('/')
def home_page():
    """Renders home page"""

    return render_template('home.html')

@app.route('/phones')
def list_phones():
    """Renders directory of employees and phone numbers (from dept)"""

    emps = Employee.query.all()
    return render_template('phones.html', emps=emps)

@app.route('/snacks/new', methods=['GET', 'POST'])
def add_snack():
    """Renders and submits AddSnackForm()"""

    form = AddSnackForm()
    if form.validate_on_submit():
        name = form.name.data
        price = form.price.data
        flash(f"Created new snack: name is {name}, price is ${price}")
        return redirect('/')
    else:
        return render_template('add_snack_form.html', form=form)

@app.route('/employees/new', methods=['GET', 'POST'])
def add_employee():
    """Renders and submits NewEmployeeForm()"""

    form = EmployeeForm()
    form.dept_code.choices = [(d.dept_code, d.dept_name) for d in Department.query.all()]

    if form.validate_on_submit():
        name = form.name.data
        state = form.state.data
        dept_code = form.dept_code.data

        emp = Employee(name=name, state=state, dept_code=dept_code)

        db.session.add(emp)
        db.session.commit()

        return redirect('/phones')
    else:
        return render_template('add_employee_form.html', form=form)

@app.route('/employees/<int:eid>/edit', methods=['GET', 'POST'])
def edit_employee(eid):
    """Render and submit edit employee form"""
    emp = Employee.query.get_or_404(eid)
    form = EmployeeForm(obj=emp)
    form.dept_code.choices = [(d.dept_code, d.dept_name) for d in Department.query.all()]

    if form.validate_on_submit():
        emp.name = form.name.data
        emp.state = form.state.data
        emp.dept_code = form.dept_code.data
        db.session.commit()
        return redirect('/phones')
    else:
        return render_template("edit_employee_form.html", form=form)
