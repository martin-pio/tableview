import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button, Box } from "@mui/material";

import LiquidFillGauge from "react-liquid-gauge";

const GaugeMeter = () => {
  const [state, setState] = useState(10);
  const startColor = "#6495ed"; // cornflowerblue
  const endColor = "#dc143c"; // crimson
  const radius = 300;
  const interpolate = interpolateRgb(startColor, endColor);
  const fillColor = interpolate(state / 100);
  const gradientStops = [
    {
      key: "0%",
      stopColor: color(fillColor).darker(0.5).toString(),
      stopOpacity: 1,
      offset: "0%",
    },
    {
      key: "50%",
      stopColor: fillColor,
      stopOpacity: 0.75,
      offset: "50%",
    },
    {
      key: "100%",
      stopColor: color(fillColor).brighter(0.5).toString(),
      stopOpacity: 0.5,
      offset: "100%",
    },
  ];
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Box textAlign="center">
          <Typography gutterBottom variant="h5" component="div">
            Some Text here
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          <LiquidFillGauge
            width={radius}
            height={radius}
            value={state}
            percent="%"
            textSize={1}
            textOffsetX={0}
            textOffsetY={0}
            textRenderer={(props) => {
              const value = Math.round(props.value);
              const radius = Math.min(props.height / 2, props.width / 2);
              const textPixels = (props.textSize * radius) / 2;
              const valueStyle = {
                fontSize: textPixels,
              };
              const percentStyle = {
                fontSize: textPixels * 0.6,
              };

              return (
                <tspan>
                  <tspan className="value" style={valueStyle}>
                    {value}
                  </tspan>
                  <tspan style={percentStyle}>{props.percent}</tspan>
                </tspan>
              );
            }}
            riseAnimation
            waveAnimation
            waveFrequency={2}
            waveAmplitude={1}
            gradient
            gradientStops={gradientStops}
            circleStyle={{
              fill: fillColor,
            }}
            waveStyle={{
              fill: fillColor,
            }}
            textStyle={{
              fill: color("#444").toString(),
              fontFamily: "Arial",
            }}
            waveTextStyle={{
              fill: color("#fff").toString(),
              fontFamily: "Arial",
            }}
          />
        </Typography>
      </CardContent>
      <Box textAlign="center">
        <CardActionArea>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              setState(Math.random() * 100);
            }}
          >
            Refresh
          </Button>
        </CardActionArea>
      </Box>
    </Card>
  );
};

export default GaugeMeter;
