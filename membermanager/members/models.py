from django.db import models
from django.contrib.auth.models import User
class Member(models.Model):
  name = models.CharField(max_length=150)
  email = models.EmailField(max_length=150, unique=True)
  message = models.CharField(max_length=500, blank=True)
  owner = models.ForeignKey(User, related_name="members", on_delete=models.CASCADE, null=True)
  created_at = models.DateTimeField(auto_now_add=True)