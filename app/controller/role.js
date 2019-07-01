'use strict';

const Controller = require('egg').Controller;

class RoleController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
    };
    ctx.body = await ctx.service.role.list(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.role.find(ctx.helper.parseInt(ctx.params.id));
  }

  async new() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.role.findAll();
  }
  async create() {
    const ctx = this.ctx;
    const role = await this.service.role.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = role;
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.body = await ctx.service.role.update({ id, updates: body });
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.role.del(id);
    ctx.status = 200;
  }
}

module.exports = RoleController;
