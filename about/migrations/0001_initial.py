# -*- coding: utf-8 -*-
# Generated by Django 1.11.14 on 2018-07-03 19:25
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='About',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('img', models.ImageField(upload_to='img/about/%Y/%m')),
            ],
        ),
    ]