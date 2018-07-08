from django.db import models


class Skill(models.Model):
    name = models.CharField(max_length=200)
    expertise = models.PositiveIntegerField()

    def __str__(self):
        return self.name

    class Meta:
        ordering = "-expertise",
