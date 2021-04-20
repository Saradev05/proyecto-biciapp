"""empty message

Revision ID: 03049b898aee
Revises: 
Create Date: 2021-04-14 21:58:16.540797

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '03049b898aee'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=True),
    sa.Column('surname', sa.String(length=100), nullable=True),
    sa.Column('age', sa.Integer(), nullable=True),
    sa.Column('nick_name', sa.String(length=100), nullable=True),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('address1', sa.String(length=80), nullable=True),
    sa.Column('address2', sa.String(length=80), nullable=True),
    sa.Column('city', sa.String(length=80), nullable=True),
    sa.Column('postal_code', sa.String(length=80), nullable=True),
    sa.Column('favorite_activities', sa.String(length=80), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('nick_name')
    )
    op.create_table('bike',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('b_type', sa.String(length=80), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=True),
    sa.Column('wheel_inches', sa.String(length=80), nullable=True),
    sa.Column('gears', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('bike')
    op.drop_table('user')
    # ### end Alembic commands ###