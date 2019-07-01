'use strict';

const Service = require('egg').Service;

class RoleService extends Service {
  async list({ offset = 0, limit = 1 }) {
    return this.ctx.model.Role.findAndCountAll({
      offset,
      limit,
      where: {
        is_delected: false,
      },
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
    });
  }
  async findAll() {
    return this.ctx.model.Role.findAll({
      where: {
        is_delected: false,
      },
    });
  }

  async find(id) {
    const role = await this.ctx.model.Role.findOne({
      where: {
        is_delected: false,
        id,
      },
    });
    if (!role) {
      this.ctx.throw(404, 'role not found');
    }
    return role;
  }

  async create(role) {
    return this.ctx.model.Role.create(role);
  }

  async update({ id, updates }) {
    const role = await this.ctx.model.Role.findByPk(id);
    if (!role) {
      this.ctx.throw(404, 'role not found');
    }
    return role.update(updates);
  }

  async del(id) {
    const role = await this.ctx.model.Role.findByPk(id);
    if (!role) {
      this.ctx.throw(404, 'role not found');
    }
    return role.update({ isDelected: true });
  }
}
module.exports = RoleService;
