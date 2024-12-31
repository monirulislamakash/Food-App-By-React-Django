from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import *
# Create your views here.
class CastomerViewSet(viewsets.ModelViewSet):
    queryset=Food_List.objects.all()
    serializer_class=FoodListSerializer