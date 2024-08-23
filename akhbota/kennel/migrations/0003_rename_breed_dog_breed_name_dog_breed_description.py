# Generated by Django 4.2.11 on 2024-07-29 07:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kennel', '0002_alter_dog_options_alter_dog_breed_options_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='dog',
            old_name='breed',
            new_name='breed_name',
        ),
        migrations.AddField(
            model_name='dog_breed',
            name='description',
            field=models.CharField(blank=True, max_length=10000),
        ),
    ]