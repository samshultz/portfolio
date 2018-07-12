from django.db import models
from django.utils import timezone
from django.core.urlresolvers import reverse


class Project(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique_for_date="publish")
    img = models.ImageField(upload_to="img/%Y/%m/%d")
    description = models.TextField(default="")
    github_link = models.URLField()
    live_project_url  = models.URLField()
    publish = models.DateTimeField(default=timezone.now)


    def __str__(self):
        return self.title

    def get_absolute_url(self):
        pass

    class Meta:
        ordering = "-publish",