# Generated by Django 4.2.11 on 2024-10-20 13:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0010_remove_puppies_article_remove_puppies_title_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='puppies',
            name='period',
            field=models.CharField(choices=[('jesień', 'Jesień'), ('zima', 'Zima'), ('wiosna', 'Wiosna'), ('lato', 'Lato')], default='jesień', max_length=20),
        ),
    ]