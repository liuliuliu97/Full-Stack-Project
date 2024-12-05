# from django.shortcuts import render
# Create your views here. / endpoint

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
# use Book model to manipulate the data, add/ view ..
from .models import Book
# convert data from json to python models
from .serializer import BookSerializer

# read all data 
@api_view(['GET'])
def get_books(request):
    books = Book.objects.all()
    serializedData = BookSerializer(books, many = True).data
    return Response(serializedData)


# create a new endpoint 
# http://127.0.0.1:8000/api/books/create/
@api_view(['POST'])
def create_books(request):
    # get the frontend data
    data = request.data
    # serialize the json data into python models
    serializer = BookSerializer(data = data)
    # check the data is valid or not
    if serializer.is_valid():
        # save the data if it is valid
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    # return an error repsonse if it is not valid
    return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)