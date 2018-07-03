# -*- coding: utf-8 -*-
# Generated by Django 1.11.14 on 2018-07-03 20:35
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('slug', models.SlugField(max_length=200, unique_for_date='publish')),
                ('img', models.ImageField(upload_to='img/%Y/%m/%d')),
                ('github_link', models.URLField()),
                ('live_project_url', models.URLField()),
                ('publish', models.DateTimeField(default=django.utils.timezone.now)),
            ],
            options={
                'ordering': ('-publish',),
            },
        ),
    ]
