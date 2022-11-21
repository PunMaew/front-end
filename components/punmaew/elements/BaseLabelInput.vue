<template>
  <div class="input-area">
    <p>
      {{ label }}<span>{{ requireText }}</span>
    </p>
    <validation-provider
      :key="keyInput"
      :name="nameInput"
      :rules="requireText && 'required'"
      v-slot="{ errors }"
    >
      <input
        :key="keyInput"
        v-model="content"
        :name="nameInput"
        type="text"
        :placeholder="placehold"
        @change="handleInput"
      />
      <span class="valid-form">
        {{ errors[0] }}
      </span>
    </validation-provider>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  props: {
    keyInput: {
      type: String,
    },
    value: {
      type: String,
    },
    label: {
      type: String,
      require: true,
    },
    requireText: {
      type: String,
    },
    placehold: {
      type: String,
    },
    nameInput: {
      type: String,
    },
  },
  watch: {
    value(newval) {
      this.content = newval;
    },
  },
  data() {
    return {
      content: this.value,
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", this.content);
    },
  },
};
</script>

<style lang="scss" scoped>
.valid-form {
  color: $error;
  font-weight: bold;
  font-size: 12px;
}
.input-area {
  p {
    font-size: 14px;
    margin-bottom: 4px;
    span {
      color: $error;
      font-size: 14px;
      @media (min-width: 1440px) {
        font-size: 16px;
      }
    }
    @media (min-width: 1440px) {
      font-size: 16px;
    }
  }
  input {
    height: 40px;
    width: 100%;
    background-color: $light;
    padding: 7px 20px;
    font-size: 14px;
    border-radius: 50px;
    @media (min-width: 1440px) {
      font-size: 16px;
      padding: 13px 20px;
      height: 50px;
    }
  }
  textarea {
    width: 100%;
    min-height: 152px;
    background-color: $light;
    padding: 16px;
    font-size: 14px;
    border-radius: 10px;
    @media (min-width: 1440px) {
      font-size: 16px;
    }
  }
  textarea::placeholder {
    font-size: 14px;
    color: $gray;
    @media (min-width: 1440px) {
      font-size: 16px;
    }
  }
}
</style>
