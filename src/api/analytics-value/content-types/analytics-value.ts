const analyticsValue = {
  async beforeCreate(event) {
    const { data } = event.params;

    data.date_metrics = new Date();
  }
}

export default analyticsValue;
