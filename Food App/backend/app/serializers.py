from rest_framework import serializers
from .models import *
class FoodListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food_List
        fields = '__all__'