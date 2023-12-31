namespace template {
    abstract class AbstractClass {
        constructor() {}
        protected operation1(): void {
            console.log("使用了方法operation1");
        }
        protected operation2(): void {
            console.log("使用了方法operation2");
        }
        protected operation3(): void {
            console.log("使用了方法operation3");
        }
        protected hookMethod(): boolean {
            return true;
        }

        public template(): void {
            this.operation1();
            this.hookMethod() && this.operation2();
            this.operation3();
        }
    }

    class ConcreterClassA extends AbstractClass {
        protected operation2(): void {
            console.log("对该方法operation2进行了修改再使用");
        }
        protected operation3(): void {
            console.log("对该方法operation3进行了修改再使用");
        }
    }

    class ConcreteClassB extends AbstractClass {
        // 覆盖钩子方法
        protected hookMethod(): boolean {
            return false;
        }
    }

    function main() {
        const class1: AbstractClass = new ConcreterClassA();
        const class2: AbstractClass = new ConcreteClassB();
        class1.template();
        // class2.template();
    }

    main();
}
