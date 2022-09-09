import { App } from "vue";
import { ElButton,ElTabs,ElTabPane,ElForm ,ElFormItem,ElInput} from "element-plus";
import { ArrowLeft, ArrowRight, ArrowUp } from "@element-plus/icons";





const components = [ElButton,ElTabs,ElTabPane,ArrowLeft, ArrowRight, ArrowUp,ElForm,ElFormItem,ElInput]


export default function(app:App) {
    for (const component of components) {
        app.component(component.name, component)
     }
}