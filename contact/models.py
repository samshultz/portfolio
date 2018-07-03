from django.db import models


class Contact(models.Model):
    
    name = models.CharField(max_length=200)
    company_name = models.CharField(max_length=200)
    phone_no = models.CharField(max_length=15)
    email_addr = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.name
        
