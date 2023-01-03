from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email=models.EmailField(unique=True)
    phone=models.CharField(max_length=10,unique=True)
