from django.db import models

class Education(models.Model):
    title = models.CharField(max_length=200)
    date_started = models.DateField(auto_now=False, auto_now_add=False)
    date_ended = models.DateField(auto_now=False, auto_now_add=False)
    description = models.TextField()

    def __str__(self):
        return self.title

    class Meta:
        ordering = "date_started",
        verbose_name_plural = "Education"

    
    
