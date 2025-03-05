<script setup>
import { onMounted, ref } from "vue";
import * as go from "gojs";

const diagramDiv = ref(null);
let diagram = null;

onMounted(() => {
  diagram = new go.Diagram(diagramDiv.value, {
    layout: new go.TreeLayout({ angle: 90, layerSpacing: 50 }),
    "undoManager.isEnabled": true,
  });

  // Шаблон узла (кастомный стиль)
  diagram.nodeTemplate = new go.Node("Auto")
      .add(new go.Shape("RoundedRectangle", { fill: "#1c1e26", strokeWidth: 2 }, new go.Binding("stroke", "borderColor")))
      .add(
          new go.Panel("Table")
              .addRowDefinition(30)
              .addRowDefinition(30)
              .addColumnDefinition(50)
              .addColumnDefinition(100)
              .add(new go.Picture({ row: 0, column: 0, margin: 5, width: 40, height: 40 }, new go.Binding("source", "avatar")))
              .add(
                  new go.TextBlock({ row: 0, column: 1, font: "bold 14px sans-serif", stroke: "white" },
                      new go.Binding("text", "name")
                  )
              )
              .add(
                  new go.TextBlock({ row: 1, column: 1, font: "12px sans-serif", stroke: "#aaa" },
                      new go.Binding("text", "position")
                  )
              )
              .add(
                  new go.Shape("RoundedRectangle", { row: 0, column: 2, fill: "#0f9d58", strokeWidth: 0, margin: 5, width: 50, height: 20 },
                      new go.Binding("fill", "tagColor")
                  )
              )
              .add(
                  new go.TextBlock({ row: 0, column: 2, font: "12px sans-serif", stroke: "white", alignment: go.Spot.Center },
                      new go.Binding("text", "tag")
                  )
              )
      );

  // Модель данных
  diagram.model = new go.GraphLinksModel(
      [
        { key: "1", name: "Luke Warm", position: "VP Marketing/Sales", tag: "Management", tagColor: "#0f9d58", avatar: "https://via.placeholder.com/40" },
        { key: "2", name: "Meg Meehan Hoffa", position: "Sales", tag: "Sales", tagColor: "#2196F3", avatar: "https://via.placeholder.com/40", parent: "1" },
        { key: "3", name: "Al Ligori", position: "Marketing", tag: "Marketing", tagColor: "#ff9800", avatar: "https://via.placeholder.com/40", parent: "1" },
        { key: "4", name: "Saul Wellinggood", position: "Manufacturing", tag: "Production", tagColor: "#673ab7", avatar: "https://via.placeholder.com/40", parent: "1" }
      ],
      [
        { from: "1", to: "2" },
        { from: "1", to: "3" },
        { from: "1", to: "4" }
      ]
  );
});
</script>

<template>
  <div ref="diagramDiv" style="width: 100%; height: 500px; background: #181a1f;"></div>
</template>