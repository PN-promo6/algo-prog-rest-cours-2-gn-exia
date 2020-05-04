import requests

users = requests.get("http://localhost:3000/users/1")

print(users.text)
