from django.contrib import admin
from .models import *
# Register your models here.
class Food_ListAdmin(admin.ModelAdmin):
    list_display = ('Titel', 'Price',)
    search_fields = ('Titel','Price')
admin.site.register(Food_List,Food_ListAdmin)