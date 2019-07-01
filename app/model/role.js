'use strict';

module.exports = app => {
  const { STRING, INTEGER, BOOLEAN } = app.Sequelize;
  const Role = app.model.define('role', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    creatorUid: { type: INTEGER, field: 'creator_uid' },
    updaterUid: { type: INTEGER, field: 'updater_uid' },
    description: STRING(100),
    isDelected: { type: BOOLEAN, defaultValue: false, field: 'is_delected' },
    defaultRole: { type: BOOLEAN, defaultValue: false, field: 'default_role' },
  }, {
    tableName: 'role',
    freezeTableName: true,
  });
  return Role;
}
