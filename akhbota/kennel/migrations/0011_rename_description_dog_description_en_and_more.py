# Generated by Django 4.2.11 on 2024-12-23 10:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kennel', '0010_rename_awards_dog_awards_en_dog_awards_pl'),
    ]

    operations = [
        migrations.RenameField(
            model_name='dog',
            old_name='description',
            new_name='description_EN',
        ),
        migrations.AddField(
            model_name='dog',
            name='description_PL',
            field=models.CharField(blank=True, max_length=10000),
        ),
    ]
