---
title: 并发与多线程
date: 2020-01-22
sidebarDepth: 2
tags:
 - concurrency
categories:
 - 笔记
---

:::tip
多线程学习记录
:::

<!-- more -->
多线程
=============
### 线程与多线程
线程可以理解为进程中一个负责程序运行的控制单元或执行路径。每个线程都有自己要运行的内容，这个内容可以称为线程要执行的任务。
一个进程中的多个执行路径,即为多线程。
一个进程中至少有一个线程，
开启多个线程为了同时运行多部分的代码。

### 优缺点
优点：
解决了多部分同时运行的问题


缺点：
线程太多会导致效率降低
所以多线程并不是任何情况下都适用。
### 虚拟机启动
应用程序的并发执行其实都是cpu做着快速的切换完成的，这个切换是随机的。
举个例子：虚拟机的启动其实就涉及多个线程（JVM启动时就启动了多个线程），
这其中至少有两个线程可以分析出来：


1、执行main函数的线程（该线程的任务代码都在main函数中）


2、负责垃圾回收的线程（每个对象都有垃圾回收的方法 即写在Object中，finalize方法 可以调用system的gc()方法调用垃圾回收器）

