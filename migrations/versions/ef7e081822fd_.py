"""empty message

Revision ID: ef7e081822fd
Revises: 18f0f41a1ccd
Create Date: 2021-04-06 18:06:30.075956

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ef7e081822fd'
down_revision = '18f0f41a1ccd'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('bike',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('bike_type', sa.String(length=80), nullable=False),
    sa.Column('wheel_inches', sa.String(length=80), nullable=True),
    sa.Column('gears', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column('user', sa.Column('address1', sa.String(length=80), nullable=False))
    op.add_column('user', sa.Column('address2', sa.String(length=80), nullable=False))
    op.add_column('user', sa.Column('age', sa.Integer(), nullable=True))
    op.add_column('user', sa.Column('city', sa.String(length=80), nullable=False))
    op.add_column('user', sa.Column('favorite_activities', sa.String(length=80), nullable=False))
    op.add_column('user', sa.Column('nick_name', sa.String(length=100), nullable=True))
    op.add_column('user', sa.Column('postal_code', sa.String(length=80), nullable=False))
    op.add_column('user', sa.Column('surname', sa.String(length=100), nullable=False))
    op.alter_column('user', 'name',
               existing_type=sa.VARCHAR(length=100),
               nullable=False)
    op.create_unique_constraint(None, 'user', ['nick_name'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'user', type_='unique')
    op.alter_column('user', 'name',
               existing_type=sa.VARCHAR(length=100),
               nullable=True)
    op.drop_column('user', 'surname')
    op.drop_column('user', 'postal_code')
    op.drop_column('user', 'nick_name')
    op.drop_column('user', 'favorite_activities')
    op.drop_column('user', 'city')
    op.drop_column('user', 'age')
    op.drop_column('user', 'address2')
    op.drop_column('user', 'address1')
    op.drop_table('bike')
    # ### end Alembic commands ###
