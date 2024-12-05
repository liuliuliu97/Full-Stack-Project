# turn json data into django model type
from rest_framework import serializers
from .models import Book

# trandform json data into python data 
class BookSerializer (serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'