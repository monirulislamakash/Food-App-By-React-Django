from django.db import models

# Create your models here.
class Food_List(models.Model):
    Titel=models.CharField(max_length=100,default='')
    Price=models.CharField(max_length=100, default='')
    Images=models.ImageField(upload_to="midea/FoodImages/")
    Description=models.TextField()