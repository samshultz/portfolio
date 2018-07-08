from django.db import models


class Contact(models.Model):
    
    name = models.CharField(max_length=200)
    email_addr = models.EmailField()
    phone_no = models.CharField(max_length=15)
    discussion_title = models.CharField(max_length=200)
    
    message = models.TextField()

    def __str__(self):
        return self.name
        
