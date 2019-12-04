module.exports = function(sequelize, DataTypes) {
  var Design = sequelize.define("Design", {
    uploadDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        len: [1, 10]
      }
    },
    fabnumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len:[1, 100]
      }
    },
    frameid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    partnumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    designid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    parttype: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 12]
      }
    },
    radius: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 10]
      }
    },
    material: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    finish: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    orderqty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 10]
      }
    },
    mbpo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    mborderdate: {
      type: DataTypes.DATE,
      allowNull: false
    }
    


    complete: {
      type: DataTypes.BOOLEAN,
      // defaultValue is a flag that defaults a new todos complete value to false if
      // it isn't supplied one
      defaultValue: false
    }
  });
  return Todo;
};
