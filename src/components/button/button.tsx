import { defineComponent } from "vue";

export default defineComponent({
  props: {
    level: { type: Number, default: 0, required: true },
    title: { type: String, default: "" }
  },
  render() {
    return <button>{this.title}</button>;
  }
});
