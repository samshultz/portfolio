from django.db import models


class About(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    img = models.ImageField(upload_to="img/about/%Y/%m")

    def __str__(self):
        return self.name
    
    
