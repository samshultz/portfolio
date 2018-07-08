from django.db import models


class About(models.Model):
    name = models.CharField(max_length=200)
    language = models.CharField(max_length=200, default="English")
    expert_in = models.CharField(max_length=400, default="Web Development")
    phone_no = models.CharField(max_length=15, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    address = models.CharField(max_length=1000, blank=True, null=True)
    freelance = models.BooleanField(default=True)
    description = models.TextField()
    img = models.ImageField(upload_to="img/about/%Y/%m")

    def __str__(self):
        return self.name
    
    
