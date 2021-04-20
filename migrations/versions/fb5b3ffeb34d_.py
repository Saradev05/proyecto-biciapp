"""empty message

Revision ID: fb5b3ffeb34d
Revises: 03049b898aee
Create Date: 2021-04-17 08:18:27.697602

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fb5b3ffeb34d'
down_revision = '03049b898aee'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('bike', 'gears')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('bike', sa.Column('gears', sa.INTEGER(), autoincrement=False, nullable=True))
    # ### end Alembic commands ###