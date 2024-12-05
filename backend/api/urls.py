# test views with broswer

from django.urls import path
from .views import get_books, create_books

# add all endpoints 
urlpatterns = [
    path('books/',get_books,name='get_books'),
    path('books/create/', create_books, name = 'create_book')
]