from django.db import models

# Create your models here.
class Member(models.Model):
  name = models.CharField(max_length=150)
  email = models.EmailField(max_length=150, unique=True)
  message = models.CharField(max_length=500, blank=True)
  created_at = models.DateTimeField(auto_now_add=True)