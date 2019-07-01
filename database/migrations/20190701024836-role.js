'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const { STRING, INTEGER, BOOLEAN, NOW, DATE } = Sequelize;
        await queryInterface.createTable('role', {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            name: STRING(30),
            created_at: { type: DATE, defaultValue: NOW },
            updated_at: { type: DATE, defaultValue: NOW },
            creator_uid: INTEGER,
            updater_uid: INTEGER,
            description: STRING(100),
            is_delected: { type: BOOLEAN, defaultValue: false },
            default_role: { type: BOOLEAN, defaultValue: false },
        });
    },

    down: async queryInterface => {
        await queryInterface.dropTable('role');
    },
};
