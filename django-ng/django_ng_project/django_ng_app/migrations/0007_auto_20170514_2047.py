# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-05-14 20:47
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('django_ng_app', '0006_auto_20170502_0310'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='admn',
        ),
        migrations.RemoveField(
            model_name='user',
            name='email',
        ),
        migrations.RemoveField(
            model_name='user',
            name='held',
        ),
        migrations.RemoveField(
            model_name='user',
            name='password',
        ),
    ]
