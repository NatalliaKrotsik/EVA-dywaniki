from flask import Flask, render_template, request, redirect
import smtplib
from email.message import EmailMessage
import os

app = Flask(__name__)

EMAIL_ADDRESS = os.environ.get('EMAIL_USER')
EMAIL_PASSWORD = os.environ.get('EMAIL_PASS')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/send', methods=['POST'])
def send():
    if request.method == 'POST':
        phone = request.form['phone']
        email = request.form['email']
        message = request.form['message']

        msg = EmailMessage()
        msg['Subject'] = 'Nowe zamówienie EVA'
        msg['From'] = EMAIL_ADDRESS
        msg['To'] = EMAIL_ADDRESS
        msg.set_content(f'Telefon: {phone}\nEmail: {email}\nWiadomość: {message}')

        try:
            with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
                smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
                smtp.send_message(msg)
            return redirect('/thanks')
        except Exception as e:
            return f"Wystąpił błąd przy wysyłaniu e-maila: {e}"

@app.route('/thanks')
def thanks():
    return "Dziękujemy za zamówienie!"

if __name__ == '__main__':
    app.run(debug=True)
