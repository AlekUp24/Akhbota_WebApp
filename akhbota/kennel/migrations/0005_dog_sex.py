# Generated by Django 4.2.11 on 2024-08-23 08:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kennel', '0004_rename_breed_name_dog_breed_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='dog',
            name='sex',
            field=models.CharField(choices=[('pies', 'Pies'), ('suka', 'Suka')], default='pies', max_length=20),
        ),
    ]